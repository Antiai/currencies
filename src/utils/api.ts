const performRequest = async <InputData extends object>(data: InputData, action: string) => {
  const result = await fetch('http://130.211.109.15/api.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({...data as object, action})
  });

  return result.json();
};

const api = {
  performRequest,
};

export default api;
