const OpenAI = require("openai")
const openai = new OpenAI("OPENAI_API_KEY");

///////////////////////////////////////////////// CONTROLLER
const aiResponseFromServer = async(req, res, next) => {
  let messages= []
  userContent = `${req.body.userInput}`
  console.log('유저컨텐츠',req.body);
  messages.push({role : "user", content : userContent})
  try {
    const completion = await openai.chat.completions.create({model: "gpt-3.5-turbo", messages:messages}); 
    req.body.responseData = completion.choices[0].message.content
    next()
  } catch (error) {
    console.error(error);
  }
}

const aiResponse = (req, res) => {
  res.json(req.body.responseData)
}




module.exports = {aiResponseFromServer, aiResponse}