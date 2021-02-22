const GetPosition = (align) => {
  switch (align) {
    case 'top-start':
      return ['left', 'bottom'];
    case 'top-end':
      return ['right', 'bottom'];
    case 'bottom-start':
      return ['left', 'top'];
    case 'bottom-end':
    default:
      return ['right', 'top'];
  }
};

export default GetPosition;
