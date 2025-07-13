import React, { FormEvent, useState } from "react";

const ContactForm: React.FC = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Posílám...");
    const form = event.currentTarget; // Save reference before any await
    const formData = new FormData(form);

    formData.append("access_key", "efac01f0-ff60-43d6-8129-0e02ea60b955");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Formulář byl úspěšně odeslán");
        form.reset(); // Use saved reference
      } else {
        console.log("Error", data);
        setResult(data.message || "Došlo k chybě při odesílání formuláře");
      }
    } catch (error) {
      setResult("Došlo k chybě při odesílání formuláře");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-lobster">Kontaktujte nás</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Jméno
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lobster/50"
            placeholder="Vaše jméno"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lobster/50"
            placeholder="vas@email.cz"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Zpráva
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lobster/50"
            placeholder="Vaše zpráva..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-lobster hover:bg-lobster/90 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out flex justify-center items-center"
        >
          {isSubmitting ? "Odesílání..." : "Odeslat formulář"}
        </button>
      </form>

      {result && (
        <div
          className={`mt-4 p-3 rounded ${
            result.includes("úspěšně")
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {result}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
