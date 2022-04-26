import { useEffect, useState } from "react";

function useServiceDetails(serviceId) {
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://powerful-sands-64241.herokuapp.com/service/${serviceId}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setService(data));
      }, [serviceId]);
      return [service];
}

export default useServiceDetails;