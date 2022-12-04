
exports.HomePage = (req, res)=>{
   res.render('index')    
}

exports.Portfolio = (req, res)=>{
   res.render('portfolio')    
}


exports.AboutUs = (req, res)=>{
   res.render('aboutus')    
}

exports.ContactUs = (req, res)=>{
   res.render('contactus')    
}



exports.GetServiePage = (req, res)=>{
   res.render('services')
}

exports.GetCaseStudies = (req, res)=>{
   res.render('casestudies')
}
exports.GetCaseStudyDetail = (req, res)=>{
   res.render('casestudydetail')
}