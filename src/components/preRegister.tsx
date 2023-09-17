import { useToast } from "@chakra-ui/react";
import Image from "next/image";
import React, {
  FC,
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  Ref,
  RefObject,
  useState,
  ChangeEvent,
  MouseEvent,
} from "react";
import { client } from "../../pages/_app";
import {
  PRE_REGISTER_QUERY,
  PRE_REGISTER_QUERY_RESULT,
} from "../../queries/preRegister.query";

import styles from "../../styles/PreRegister.module.css";
import TypeformEmbed from "./form";

interface Commit {
  repoName: string;
  commitSHA: string;
  commitMessage: string;
  commitURL: string;
}

const rulebook: Record<string, number> = {
  PushEvent: 5,
  PullRequestEvent: 10,
  IssuesEvent: 3,
};

export const PreRegister = forwardRef<HTMLInputElement>((_, ref) => {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
  const [commits, setCommits] = useState<Commit[]>([]);

  async function fetchGitHubData() {
    setLoading(true);
    const response = await fetch(
      `https://api.github.com/users/${username}/events/public`
    );
    const data = await response.json();
    console.log(data);

    let userPoints = 0;
    const userCommits: Commit[] = [];

    data.forEach((event: any) => {
      if (event.type in rulebook) {
        if (event.type === "PushEvent") {
          const repoName = event.repo.name;
          const commitSHA = event.payload.commits[0]?.sha;
          const commitMessage = event.payload.commits[0]?.message;
          const commitURL = `https://github.com/${repoName}/commit/${commitSHA}`;

          if (event.org) {
            userPoints += rulebook[event.type];
            userCommits.push({
              repoName,
              commitSHA,
              commitMessage,
              commitURL,
            });
          }
        } else {
          userPoints += rulebook[event.type];
        }
      }
    });

    setPoints(userPoints);
    setCommits(userCommits);
    setLoading(false);
  }

  return (
    <div ref={ref} className={styles.container} id="join">
      <div className={styles.left}>
        <div>
          <h1>Check how much you can earn</h1>
        </div>
        <div className={styles.inputContainer}>
            <input
              type="text"
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              placeholder=" Enter Github Username..."
            />
          <button
            type="button"
            onClick={(e: MouseEvent<HTMLButtonElement>) => fetchGitHubData()}
          >
            {loading ? "loading..." : "Submit"}
          </button>
        </div>

        {points > 0 && (
          <h4 className={styles.points}>
            {" "}
            You can earn : <i>{points} GBT tokens</i>
          </h4>
        )}
        {points > 0 && (
          <div className={styles.commitContainer} id="commits">
            {commits.length > 0 && (
              <>
                <h3>Recent Commits:</h3>
                {commits.map((commit, index) => (
                  <div className={styles.commit} key={index}>
                    <p>
                      {" "}
                      <strong>Repository: </strong>
                      {commit.repoName}
                    </p>
                    <p>
                      {" "}
                      <strong>Commit Message:</strong> {commit.commitMessage}
                    </p>
                    <p>
                      {" "}
                      <strong>Commit URL:</strong>{" "}
                      <a
                        href={commit.commitURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i>click</i> to check
                      </a>
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
      <div className={styles.mockup}>
        {/* <h1>Contact us</h1> */}
        <a href="https://forms.gle/31VNU81kGjyihDvK9">Click here to fill the form and earn GitBucks!!!</a>
      </div>
    </div>
  );
});
