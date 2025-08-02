import express from "express";
import cors from "cors";

const app=express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const internData = {
  ananya2025: {
    name: "Ananya",
    referralCode: "ananya2025",
    donations: 3000,
  },
  rahul2025: {
    name: "Rahul",
    referralCode: "rahul2025",
    donations: 4500,
  },
};

app.get("/api/intern/:referralCode",(req,res)=>{
    const referralCode=req.params.referralCode.toLowerCase();
    const data=internData[referralCode]
    if(data){
        res.json(data);
    }
    else{
        res.status(404).json({error:"Intern not found"})
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${port}`);
});