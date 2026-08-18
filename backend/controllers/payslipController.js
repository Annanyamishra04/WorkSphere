import Payslip from "../models/Payslip.js";


export const createPayslip = async (req , res) =>{
    try {
        const {employeeId, month , year, basicSalary, allowances, deductions} = req.body;

        if(!employeeId || !month || !year || !basicSalary){
            return res.status(400).json({error: "Missing fields" });
        }

        const netSalary = Number(basicSalary) + Number(allowances || 0) - Number(deductions || 0);

        const payslip = await Payslip.create({
            employeeId,
            month: Number(month),
            year: Number(year),
            basicSalary: Number(basicSalary),
            allowances: Number(allowances || 0),
            deductions: Number(deductions || 0),
            netSalary,
        })
        return res.json({success: true , data: payslip})
    } catch (error) {
        return res.status(500).json({error: "Failed"});
        
    }

}


export const getPayslips = async (req , res) =>{
    try {
        const session = req.session;
        const isAdmin = session.role === "ADMIN";
        if(isAdmin){
            
        }
        
    } catch (error) {
        return res.status(500).json({error: "Failed"});
    }

}


export const getPayslipById = async (req , res) =>{

}

