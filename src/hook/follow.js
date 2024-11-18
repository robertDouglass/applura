import { useContext } from "react";
import ClientContext from "../context/client.jsx";

/**
 * useFollow provides the Applura client's "follow" function.
 *
 * The "follow" function is used to initiate client-side resource navigation. The "follow" function takes a link object
 * or URL and fetches its target using the Applura client. Once fetched, the Applura client sends the new resource to
 * the application via the event loop started in the Socket component or a problem if one was encountered. "follow"
 * returns a promise which resolves to a boolean indicating success or failure.
 */
const useFollow = () => {
  const client = useContext(ClientContext);
  if (client) {
    return client.follow;
  }
};

export default useFollow;
