export const handlePostRequest = (req, res) => {
    try {
        const { data } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input format" });
        }

        // Ensure all values are treated as strings for proper filtering
        const numbers = data.filter(item => !isNaN(item)).map(Number);
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item)); // Ensure only single letters

        // Find highest alphabet (case insensitive)
        const highest_alphabet = alphabets.length > 0 
            ? [alphabets.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).slice(-1)[0]]
            : [];

        // Construct response
        const response = {
            is_success: true,
            user_id: "Deepansh_Rai_24102003",  // Replace with actual details
            email: "deepanshrai2792@gamil.com",
            roll_number: "22BCC70072",
            numbers,
            alphabets,
            highest_alphabet
        };

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ is_success: false, message: "Internal Server Error" });
    }
};


export const handleGetRequest = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};
