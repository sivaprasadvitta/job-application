import { Schema,model } from 'mongoose';

const jobSchema = new Schema({
  title:           { type: String, required: true },
  companyName:     { type: String, required: true },
  location:        { type: String, required: true },
  jobType:         { type: String, enum: ['Full-time','Part-time','Contract','Internship'], required: true },
  salaryMin:       { type: Number, required: true },
  salaryMax:       { type: Number, required: true },
  description:     { type: String, default: '' },
  requirements:    { type: String, default: '' },
  responsibilities:{ type: String, default: '' },
  applicationDeadline: { type: Date },
  createdAt:       { type: Date, default: Date.now }
});

export default model('Job', jobSchema);
