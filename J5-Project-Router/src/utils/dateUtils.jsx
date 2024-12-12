// Vérifie si une date correspond à l'anniversaire aujourd'hui
export const isTodayBirthday = (birthDate) => {
  if (!birthDate) return false;
  const today = new Date();
  const date = new Date(birthDate);

  return (
    today.getDate() === date.getDate() && today.getMonth() === date.getMonth()
  );
};

// Formate une date en une chaîne lisible (exemple : 15/07/1990)
export const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR");
};
