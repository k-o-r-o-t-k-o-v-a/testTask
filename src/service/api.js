import endpoints from './endpoints';

class apiServise {
  getBigData = async() => {
    try {
      const res = await fetch(endpoints.bigdata, {
        method: 'GET'
      });

      return await res.json();
    } catch (e) {
      console.log(e);
    }
  };

  getSmallData = async() => {
    try {
      const res = await fetch(endpoints.smalldata, {
        method: 'GET'
      });

      return await res.json();
    } catch (e) {
      console.log(e);
    }
  };

  getError = async() => {
    try {
      const res = await fetch(endpoints.error, {
        method: 'GET'
      });

      return await res.json();
    } catch (e) {
      console.log(e);
    }
  };
}

export default apiServise;
