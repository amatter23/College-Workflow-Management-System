const AdminDate = {
  //just open tasks
 tasks: [
    {
      id: 1,
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 27, 1995 03:24:00'),
    },
    {
      id: 2,
      title: 'need to creat a table',
      sender: { role: 'D', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 17, 1922 03:24:00'),
    },
    {
      id: 3,
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 17, 1995 03:24:00'),
    },
    {
      id: 4,
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 17, 1995 03:24:00'),
    },
    {
      id: 5,
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 17, 1995 03:24:00'),
    },
    {
      id: 6,
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 67, 6995 03:24:00'),
    },
    {
      id: 7,
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 17, 1995 03:24:00'),
    },
    {
      id: 8,
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 17, 1995 03:24:00'),
    },
  ],
  users: [
    {
      id: 'e1',
      name: 'matter1',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'head',
      degree: 'doctor',
    },
    {
      id: 'e1',
      name: 'Ahmed matter2',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'dean',
      degree: 'doctor',
    },
    {
      id: 'e1',
      name: 'Mohamed matter3',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'vice',
      degree: 'doctor',
    },
    {
      id: 'e1',
      name: 'Hossam matte4',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'assistant',
      degree: 'doctor',
    },
    {
      id: 'e1',
      name: 'Ali matter5',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'dean',
      degree: 'doctor',
    },
    {
      id: 'e1',
      name: 'Mahdy matter6',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'head',
      degree: 'doctor',
    },
    {
      id: 'e1',
      name: 'matter7',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'vice',
      degree: 'doctor',
    },
  ],
  role: [
    {
      name: 'dean',
      numberOfUsers: 9,
    },
    {
      name: 'vice',
      numberOfUsers: 9,
    },
    {
      name: 'head',
      numberOfUsers: 9,
    },
    {
      name: 'assistant',
      numberOfUsers: 9,
    },
    {
      name: 'secrtary',
      numberOfUsers: 9,
    },
  ],
  degree: [
    {
      name: 'dean',
      numberOfUsers: 9,
    },
    {
      name: 'dean',
      numberOfUsers: 9,
    },
    {
      name: 'dean',
      numberOfUsers: 9,
    },
    {
      name: 'dean',
      numberOfUsers: 9,
    },
  ],
  vecations: [
    {
      id: 1,
      sender: { role: 'dean', name: 'Ahmed Matter' },
      type: 'casual vecation',
      //need creat how this fild come from backend
      //now i will use as a text (accepted,reject,pending)
      status: 'accepted',
    },
    {
      id: 2,
      sender: { role: 'dean', name: 'Ahmed Matter' },
      type: 'casual vecation',
      //need creat how this fild come from backend
      //now i will use as a text (accepted,reject,pending)
      status: 'reject',
    },
    {
      id: 3,
      sender: { role: 'dean', name: 'Ahmed Matter' },
      type: 'casual vecation',
      //need creat how this fild come from backend
      //now i will use as a text (accepted,reject,pending)
      status: 'accepted',
    },
    {
      id: 4,
      sender: { role: 'dean', name: 'Ahmed Matter' },
      type: 'casual vecation',
      //need creat how this fild come from backend
      //now i will use as a text (accepted,reject,pending)
      status: 'pending',
    },
    {
      id: 5,
      sender: { role: 'dean', name: 'Ahmed Matter' },
      type: 'casual vecation',
      //need creat how this fild come from backend
      //now i will use as a text (accepted,reject,pending)
      status: 'accepted',
    },
  ], 
};
export default AdminDate;
