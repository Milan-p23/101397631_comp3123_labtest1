const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'delayed success!' });
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({ error: 'delayed exception!' });
    }, 500);
  });
};

const handleResolvedPromise = () => {
  resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

const handleRejectedPromise = () => {
  rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

handleResolvedPromise();
handleRejectedPromise();
