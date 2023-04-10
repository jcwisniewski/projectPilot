const { response } = require("express");
const axios = require("axios");
const { v4: uuid } = require("uuid");
const Message = require("../models/Message");



module.exports = {
  async GetMessages(req, response) {
    try {      
      const messages = await Message.find();
      return response.status(200).json({ messages });
    } catch (errr) {
      response.status(500).json({ error: err.message });
    }
  },

  async SendMessage(request, response) {
    const url = `${process.env.API_URL}/rest/sendMessage/text/?id=${process.env.API_TOKEN}`
    const { receiver, delay, message  } = request.body;
    if (receiver.length == 0 || message.length == 0) {
      return response.status(400).json({ error: "Receiver or message is null or empty" });
    }
    const messages = new Message({
      _id: uuid(),
      receiver,
      delay,
      message
    });

    try {    
      const responseApi = await axios.post(url, request.body);
      if(responseApi.data.success === true)
      {
        messages.save();        
        return response.status(201).json({status: response.status, message: messages});
      }        
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
}

