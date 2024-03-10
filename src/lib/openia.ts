import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export async function generateImagePrompt(name: string) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are an creative and helpful AI assistance capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALLE API to generate a thumbnail. The description should be minimalistic and flat styled."
                },
                {
                    role: "user",
                    content: `Please generate a thumbnail description for my notebook titles ${name}.`
                }
            ],
        });
        const image_description = response.choices[0].message;
        return image_description;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function generateImage() {

}