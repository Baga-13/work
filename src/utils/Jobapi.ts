const API_URL = "http://localhost:3000/jobs";

export const fetcher = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }
  return res.json;
};

export const createJob = async (jobData: any) => {
  return fetcher(`${API_URL}/createJob`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });
};

export const getJobs = async () => {
  return fetcher(`${API_URL}/allJobs`);
};

export const updateJob = async (id: string, jobData: any) => {
  return fetcher(`${API_URL}/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });
};

export const deleteJob = async (id: string) => {
  return fetcher(`${API_URL}/jobs/${id}`, {
    method: "DELETE",
  });
};
