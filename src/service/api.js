import endpoints from './endpoints';
class ApiService {
  getBigData = async message => {
    try {
      const res = await fetch(endpoints.bigdata, {
        method: 'GET'
      });

      if (!res.ok) {
        throw new Error(`HTTP status code: ${res.status}`);
      }

      return { data: await res.json(), status: `${res.status}` };
    } catch (e) {
      message = `Error occurred:
       err.name: ${e.name}
       err.message: ${e.message}`;
      alert(message);
    }
  };

  getSmallData = async message => {
    try {
      const res = await fetch(endpoints.smalldata, {
        method: 'GET'
      });

      if (!res.ok) {
        throw new Error(`HTTP status code: ${res.status}`);
      }

      return { data: await res.json(), status: `${res.status}` };
    } catch (e) {
      message = `Error occurred;
       err.name: ${e.name}
       err.message: ${e.message}`;
      alert(message);
    }
  };

  getError = async message => {
    try {
      const res = await fetch(endpoints.error, {
        method: 'GET'
      });

      if (!res.ok) {
        throw new Error(`HTTP status code: ${res.status}`);
      }

      return { data: await res.json(), status: `${res.status}` };
    } catch (e) {
      message = `Error occurred;
       err.name: ${e.name}
       err.message: ${e.message}`;
      alert(message);
    }
  };

  getUserById = async(id, message) => {
    const url = `${endpoints.bigdata}/${id}`;

    try {
      const res = await fetch(url, {
        method: 'GET'
      });

      if (!res.ok) {
        throw new Error(`HTTP status code: ${res.status}`);
      }

      return { data: await res.json(), status: `${res.status}` };
    } catch (e) {
      message = `Error occurred;
       err.name: ${e.name}
       err.message: ${e.message}`;
      alert(message);
    }
  };
}

export default ApiService;
