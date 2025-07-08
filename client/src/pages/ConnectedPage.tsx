import { useEffect } from "react";
import client from "../services/client";

function ConnectedPage() {
  const testCredentials = async () => {
    try {
      await client.get("/test");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    testCredentials();
  }, []);
  return <div>ConnectedPage</div>;
}

export default ConnectedPage;
