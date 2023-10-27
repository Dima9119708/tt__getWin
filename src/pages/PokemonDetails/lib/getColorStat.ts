type GetColorStat = (stat: number) => 'default' | 'secondary' | 'info' | 'success' | 'warning'

export const getColorStat: GetColorStat = (stat) => {
  if (stat >= 80) {
    return 'success';
  }

  if (stat >= 50 && stat < 80) {
    return 'secondary';
  }

  if (stat >= 25 && stat < 50) {
    return 'info';
  }

  if (stat < 25) {
    return 'warning';
  }

  return 'default';
};
