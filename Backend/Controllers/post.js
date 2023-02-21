const { Post, Creator } = require('../models')

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll({ include: Creator })
    res.json(posts)
  } catch (error) {
    next(error)
  }
}

exports.getPostById = async (req, res, next) => {
  const { id } = req.params

  try {
    const post = await Post.findByPk(id, { include: Creator })
    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }
    res.json(post)
  } catch (error) {
    next(error)
  }
}

exports.createPost = async (req, res, next) => {
  const { title, content, imageUrl, creatorId } = req.body

  try {
    const post = await Post.create({ title, content, imageUrl, creatorId })
    res.status(201).json(post)
  } catch (error) {
    next(error)
  }
}

exports.updatePost = async (req, res, next) => {
  const { id } = req.params
  const { title, content, imageUrl, creatorId } = req.body

  try {
    const post = await Post.findByPk(id)
    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }

    post.title = title
    post.content = content
    post.imageUrl = imageUrl
    post.creatorId = creatorId

    await post.save()

    res.json(post)
  } catch (error) {
    next(error)
  }
}

exports.deletePost = async (req, res, next) => {
  const { id } = req.params

  try {
    const post = await Post.findByPk(id)
    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }

    await post.destroy()

    res.status(204).send()
  } catch (error) {
    next(error)
  }
}
