export const checkPageDataToShow = (
  corretor_data: Corretor,
  theme: Theme | undefined,
  pageIsActive: boolean | undefined
) => {
  if (corretor_data && theme && pageIsActive) {
    return true;
  }

  return false;
};
