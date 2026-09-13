import {FC, memo, useCallback, useMemo, useState} from 'react';

import {contact} from '../../../data/data';

interface FormData {
<<<<<<< Updated upstream
  name: string;
  subject: string;
=======
  email: string;
>>>>>>> Stashed changes
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
<<<<<<< Updated upstream
      name: '',
      subject: '',
=======
      email: '',
>>>>>>> Stashed changes
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // open default mail client to email in contact form without opening a new tab
      window.open(
        `mailto:${contact.items[0].text}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.message)}`,
        '_self',
      );
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[200px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
