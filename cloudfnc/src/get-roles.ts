import { genkit,z } from "genkit";
import { googleAI, gemini15Flash } from "@genkit-ai/googleai";
import { onCallGenkit } from "firebase-functions/https";
import { defineSecret } from "firebase-functions/params";


const apiKey = defineSecret("GOOGLE_GENAI_API_KEY");

const ai = genkit({
    model:gemini15Flash,
    plugins:[
        googleAI()
    ]
});

const getRoleFlow = ai.defineFlow({
    name:'getRoleFlow',
    outputSchema: z.string()
    }, async () => {
        try {
            const roleList = await ai.generate({
                prompt: "get me the top 5 roles college students are preparing for as of now, output in JSON string format",
              });
          
              return roleList.text;
        } catch (error) {
            console.log(`the real error is ${error}`);
            throw new Error('request failed');
            
        }
      }
);

export const getRoles = onCallGenkit({
    secrets:[apiKey]
},getRoleFlow)