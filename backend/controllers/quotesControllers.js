// controllers/userController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createQuote = async (req, res) => {
    const { name, description } = req.body;
    try {
        const quote = await prisma.quote.create({
            data: { name, description },
        });
        res.json(quote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getQuotes = async (req, res) => {
    try {
        const quotes = await prisma.quote.findMany({
        });
        res.json(quotes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getQuoteById = async (req, res) => {
    const { id } = req.params;
    try {
        const quote = await prisma.quote.findUnique({
            where: { id },
        });
        res.json(quote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateQuote = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const quote = await prisma.quote.update({
            where: { id },
            data: { name, description },
        });
        res.json(quote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteQuote = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.quote.delete({
            where: { id },
        });
        res.json({ message: 'Quote deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createQuote,
    getQuotes,
    getQuoteById,
    updateQuote,
    deleteQuote,
};
