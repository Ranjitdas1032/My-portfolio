import { useEffect, useState } from "react";
import "./LeetCodeStats.css";
import { getLeetCodeStats } from "../../services/leetcodeApi";

function LeetCodeStats() {
  const username = "RanjitDas";

  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getLeetCodeStats(username);
        setStats(data);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="leetcode section" id="leetcode">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Coding Profile</p>
          <h2>Problem-solving consistency on LeetCode.</h2>
        </div>

        {status === "loading" && <p className="leetcode-loading">Loading LeetCode stats...</p>}

        {status === "error" && (
          <div className="leetcode-card">
            <p>Unable to load live LeetCode stats right now.</p>
            <a
              href={`https://leetcode.com/u/${username}/`}
              target="_blank"
              rel="noreferrer"
            >
              View LeetCode Profile
            </a>
          </div>
        )}

        {status === "success" && stats && (
          <div className="leetcode-card">
            <div className="leetcode-profile">
              {stats.avatar && <img src={stats.avatar} alt={stats.username} />}

              <div>
                <h3>{stats.realName || stats.username}</h3>
                <p>@{stats.username}</p>
                <a href={stats.profileUrl} target="_blank" rel="noreferrer">
                  View Profile
                </a>
              </div>
            </div>

            <div className="leetcode-total">
              <h3>{stats.totalSolved}+</h3>
              <p>Problems Solved</p>
            </div>

            <div className="leetcode-grid">
              <div>
                <span>Easy</span>
                <strong>{stats.easySolved}</strong>
              </div>

              <div>
                <span>Medium</span>
                <strong>{stats.mediumSolved}</strong>
              </div>

              <div>
                <span>Hard</span>
                <strong>{stats.hardSolved}</strong>
              </div>

              <div>
                <span>Ranking</span>
                <strong>{stats.ranking || "N/A"}</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default LeetCodeStats;