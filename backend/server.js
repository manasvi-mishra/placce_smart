import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const jobs = [
  { id:"job-1", company:"TCS", role:"Graduate Software Engineer", location:"Pune / Hybrid", package:"₹7.2 LPA", deadline:"2026-10-08", openings:12, skills:["Java","SQL","DSA","Git"], eligibility:"B.Tech CSE/IT • CGPA 7+", description:"Build and maintain enterprise applications." },
  { id:"job-2", company:"Deloitte", role:"Analyst – Technology", location:"Bengaluru", package:"₹8.5 LPA", deadline:"2026-10-12", openings:8, skills:["Python","SQL","Power BI","Communication"], eligibility:"B.Tech • CGPA 7.5+", description:"Work on data-driven technology consulting." },
  { id:"job-3", company:"Microsoft", role:"Software Engineering Intern", location:"Hyderabad", package:"₹80K/month", deadline:"2026-10-20", openings:5, skills:["Python","Java","DSA","Git","React"], eligibility:"Pre-final year CSE/IT", description:"Collaborate with engineering teams to build software." }
];

const students = [
  { id:"stu-1", name:"Aarav Sharma", collegeId:"TI24CSE041", branch:"CSE", cgpa:8.6, skills:["Java","SQL","Python","DSA","Git"], status:"Placed", applications:5, interviews:3 },
  { id:"stu-2", name:"Riya Verma", collegeId:"TI24CSE052", branch:"CSE", cgpa:8.1, skills:["Python","React","SQL","Firebase"], status:"In Process", applications:4, interviews:2 },
  { id:"stu-3", name:"Kabir Singh", collegeId:"TI24CSE067", branch:"CSE", cgpa:7.4, skills:["Java","C++","DSA","Git"], status:"Searching", applications:2, interviews:1 }
];

const applications = [];
const notices = [];

app.get("/api/health", (_, res) => res.json({ ok:true, service:"PlaceSmart API", mode:"local-demo" }));
app.get("/api/jobs", (_, res) => res.json(jobs));
app.post("/api/jobs", (req,res) => {
  const job = { id:`job-${Date.now()}`, ...req.body };
  jobs.unshift(job);
  res.status(201).json(job);
});
app.get("/api/students", (_,res) => res.json(students));
app.get("/api/applications", (_,res) => res.json(applications));
app.post("/api/applications", (req,res) => {
  const item = { id:`app-${Date.now()}`, ...req.body, appliedOn:new Date().toISOString().slice(0,10) };
  applications.unshift(item);
  res.status(201).json(item);
});
app.patch("/api/applications/:id", (req,res) => {
  const item = applications.find(x=>x.id===req.params.id);
  if (!item) return res.status(404).json({message:"Application not found"});
  Object.assign(item, req.body);
  res.json(item);
});
app.post("/api/notices", (req,res) => {
  const item = { id:`notice-${Date.now()}`, date:new Date().toISOString().slice(0,10), ...req.body };
  notices.unshift(item);
  res.status(201).json(item);
});

app.post("/api/ai/match", (req,res) => {
  const student = new Set((req.body.studentSkills || []).map(x=>String(x).toLowerCase()));
  const required = (req.body.requiredSkills || []).map(x=>String(x).toLowerCase());
  const matched = required.filter(x=>student.has(x));
  const missing = required.filter(x=>!student.has(x));
  const percentage = required.length ? Math.round(matched.length / required.length * 100) : 0;
  res.json({ percentage, matched, missing, mode:"rule-based prototype" });
});

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected (persistence can be added to models next)."))
    .catch(() => console.log("MongoDB not connected; continuing in local demo mode."));
}

app.listen(PORT, () => console.log(`PlaceSmart API running on http://localhost:${PORT}`));
