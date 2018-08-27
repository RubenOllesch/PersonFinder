export default url => new Promise((resolve, reject) => {
        try {
            fetch(url).then((data) => {
                resolve(data.json());
            });
        } catch (error) {
            reject(error);
        }
    });
