import  {Request, Response} from 'express' 
import EmaiService from '../services/EmailService';

const user = [
  {
    name: 'Deivison',
    email: 'deivison@gmail.com',
  }
];


export default {
  async index(req: Request, res: Response){
    return res.json(user)
  },
  async teste(req: Request, res: Response){
    return res.send("Hello!")
  },
  
  async create(req: Request, res: Response){
    const emailServices = new EmaiService();
    emailServices.sendMail(
      {
        to:{
          name: "Deivison",
          email: 'deivison@gmail.com'},
        message:{
          subject: "Bem-vindo ao sistema",
          body: 'Seja bem-vindo'}
      }
    );
    res.send();
  }
  
}