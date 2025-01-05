export const border = (department: string) => {
  switch (department) {
    case '産科':
      return 'border border-red-500';
    case '麻酔科':
      return 'border border-yellow-500';
    case '救急科':
      return 'border border-green-500';
    case '新生児科':
      return 'border border-cyan-500';
    case '輸血部':
      return 'border border-teal-500';
    case '集中治療科':
      return 'border border-blue-500';
    case '看護部':
      return 'border border-purple-500';
    case '薬剤部':
      return 'border border-pink-500';
    default:
      return 'border border-gray-500';
  }
};
