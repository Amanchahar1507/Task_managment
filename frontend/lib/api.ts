const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiFetch = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    window.location.href = "/login";
    return;
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {})
    }
  });

  if (res.status === 401) {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
    return;
  }

  return res.json();
};
