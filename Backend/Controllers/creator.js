const { Creator } = require('../models')
const ergo = require('ergo-lib');
const ergoScript = require('ergo-lib/scripts');
const { ErgoPay } = require('ergo-pay');

// Initialize ErgoPay with the Nautilus Wallet backend
const ergoPay = new ErgoPay({
  backend: 'nautilus',
  network: 'mainnet'
});

exports.getCreators = async (req, res, next) => {
  try {
    const creators = await Creator.findAll()
    res.json(creators)
  } catch (error) {
    next(error)
  }
}

exports.getCreatorById = async (req, res, next) => {
  const { id } = req.params

  try {
    const creator = await Creator.findByPk(id)
    if (!creator) {
      return res.status(404).json({ error: 'Creator not found' })
    }
    res.json(creator)
  } catch (error) {
    next(error)
  }
}

exports.createCreator = async (req, res, next) => {
  const { name, bio, imageUrl, paymentAddress } = req.body

  try {
    // Create a new ErgoScript contract for the creator's payment address
    const creatorScript = ergoScript.fromAddress(paymentAddress);

    const creator = await Creator.create({ name, bio, imageUrl, paymentAddress })
    res.status(201).json(creator)
  } catch (error) {
    next(error)
  }
}

exports.updateCreator = async (req, res, next) => {
  const { id } = req.params
  const { name, bio, imageUrl, paymentAddress } = req.body

  try {
    const creator = await Creator.findByPk(id)
    if (!creator) {
      return res.status(404).json({ error: 'Creator not found' })
    }

    creator.name = name
    creator.bio = bio
    creator.imageUrl = imageUrl
    creator.paymentAddress = paymentAddress

    // Create a new ErgoScript contract for the creator's payment address
    const creatorScript = ergoScript.fromAddress(paymentAddress);

    await creator.save()

    res.json(creator)
  } catch (error) {
    next(error)
  }
}

exports.deleteCreator = async (req, res, next) => {
  const { id } = req.params

  try {
    const creator = await Creator.findByPk(id)
    if (!creator) {
      return res.status(404).json({ error: 'Creator not found' })
    }

    await creator.destroy()

    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

exports.supportCreator = async (req, res, next) => {
  const { creatorId, amount } = req.body

  try {
    const creator = await Creator.findByPk(creatorId)
    if (!creator) {
      return res.status(404).json({ error: 'Creator not found' })
    }

    // Create a new ErgoScript contract for the creator's payment address
    const creatorScript = ergoScript.fromAddress(creator.paymentAddress);

    // Create a new transaction with Ergo inputs and outputs
    const tx = new ergo.Transaction();

    // Add a new input to the transaction with the creator's script and payment amount
    const input = new ergo.Input();
    input.boxId = creator.boxId;
    input.extension = new ergo.Extension();
    input.extension.fields = [      new ergo.ExtensionField(ergoScript.encode(creatorScript), 'creator_script'),
