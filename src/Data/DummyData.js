const AdminDate = {
  //just open tasks
  tasks: [
    {
      id: 'e1',
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 27, 1995 03:24:00'),
    },
    {
      id: 'e2',
      title: 'need to creat a table',
      sender: { role: 'D', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 17, 1922 03:24:00'),
    },
    {
      id: 'e3',
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 17, 1995 03:24:00'),
    },
    {
      id: 'e4',
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 17, 1995 03:24:00'),
    },
    {
      id: 'e5',
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 17, 1995 03:24:00'),
    },
    {
      id: 'e6',
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 67, 6995 03:24:00'),
    },
    {
      id: 'e7',
      title: 'need to creat a table',
      sender: { role: 'dean', name: 'Ahmed Matter' },
      resever: { role: 'assistant', name: 'Ahmed Matter' },
      deadline: new Date('December 17, 1995 03:24:00'),
    },
    {
      id: 'e8',
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
      id: 'e2',
      name: 'Ahmed matter2',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'dean',
      degree: 'doctor',
    },
    {
      id: 'e3',
      name: 'Mohamed matter3',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'vice',
      degree: 'doctor',
    },
    {
      id: 'e4',
      name: 'Hossam matte4',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'assistant',
      degree: 'doctor',
    },
    {
      id: 'e5',
      name: 'Ali matter5',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'dean',
      degree: 'doctor',
    },
    {
      id: 'e6',
      name: 'Mahdy matter6',
      email: 'matterahmed36@gmail.com',
      password: 'jfkhdsf',
      role: 'head',
      degree: 'doctor',
    },
    {
      id: 'e7',
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
    {
      name: 'mo',
      numberOfUsers: 9,
    },
    {
      name: 'mazz',
      numberOfUsers: 9,
    },
    {
      name: 'mtttttazz',
      numberOfUsers: 9,
    },
  ],
  degree: [
    {
      name: 'doctor',
      numberOfUsers: 9,
    },
    {
      name: 'co doctor',
      numberOfUsers: 9,
    },
    {
      name: 'assistant',
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
