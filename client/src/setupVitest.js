import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";

const fetchMock = createFetchMock(vi);
fetchMock.enableMocks();

process.env.REACT_APP_API_BASE_URL = "http://localhost:3000";
