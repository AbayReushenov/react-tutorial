export const date = (h: number): Date => {
    let copiedDate = new Date();
    copiedDate.setTime(copiedDate.getTime() + h * 60 * 60 * 1000);
    return copiedDate;
  };
