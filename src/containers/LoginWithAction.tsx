import * as React from "react";
import axios from "axios";

import { Login } from "../components/pages/login";

declare var API_HOST: string;
const host = API_HOST;

interface LoginResponse {
  url: string;
}

const action = {
  redirect: async () => {
    const response = await axios.get<LoginResponse>(
      `${host}/login/oauth/google`,
      {
        maxRedirects: 0
      }
    );
    location.href = response.data.url;
  }
};
export const LoginWithAction = () => <Login {...action} />;
