export default async (url) => {
    return new Promise(function(resolve, reject) {
        try {
            fetch(url).then(function(data) {
                resolve(data.json());
            });
        }
        catch {
            reject(error);
        }
    });  
};
