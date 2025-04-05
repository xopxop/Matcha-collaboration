export const getTimeDifference = (timeStampUTC: Date) => {
  const utcNow = new Date();
  const timeDifference = utcNow.getTime() - timeStampUTC.getTime();

  return {
    minutes: Math.floor(timeDifference / (1000 * 60)),
    hours: Math.floor(timeDifference / (1000 * 60 * 60)),
    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
  };
};
