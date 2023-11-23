import axios from "axios";

export const getGithubRepo = async (searchStr, page, amount = 6) => {
  try {
    const controller = new AbortController();

    const signal = controller.signal;

    await setTimeout(() => {
      controller.abort();
    }, 1500);

    const response = await axios.get(
      `https://api.github.com/search/repositories`,
      {
        params: {
          q: String(searchStr),
          per_page: amount,
          page: page,
        },
        signal,
      }
    );
    return response.data.items;
  } catch (error) {
    return Promise.reject("Error");
  }
};
