// Basic fetch implementation since we don't want to add heavy dependencies just yet
export async function fetchGitHubProjects(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return data.map((repo: any) => ({
        id: repo.name,
        title: repo.name.replace(/-/g, ' ').toUpperCase(),
        description: repo.description || "No mission brief available.",
        techStack: [repo.language || "Unknown"], // GitHub only gives primary language
        githubLink: repo.html_url,
        image: { id: "placeholder" } // We'd need a strategy for images
    }));
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
}
