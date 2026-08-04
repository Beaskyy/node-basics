const runDemoUrl = () => {
  const apiUrl = new URL(
    "https://api.example.com/v1/resource?page=2&limit=10&sort=desc",
  );
  console.log("API URL:", apiUrl.href);
  console.log("API Protocol:", apiUrl.protocol);
  console.log("API Hostname:", apiUrl.hostname);
  console.log("API Port:", apiUrl.port);
  console.log("API Pathname:", apiUrl.pathname);
  console.log("API Search Params:", apiUrl.searchParams);
  console.log("API Search Params String:", apiUrl.searchParams.toString());
  console.log("API Search Params Object:", Object.fromEntries(apiUrl.searchParams));

  const page = apiUrl.searchParams.get("page");
  const limit = apiUrl.searchParams.get("limit");
  const sort = apiUrl.searchParams.get("sort");

  console.log("Page:", page);
  console.log("Limit:", limit);
  console.log("Sort:", sort);
};

runDemoUrl();
