import Link from "next/link";

const Form = ({ type, post, setpost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world , and let your
        imagination run wild with any AI-Powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 flex flex-col gap-7 glassmorphism w-full max-w-2xl'
      >
        <label
          htmlFor='prompt'
          className='font-satoshi font-semibold text-base text-gray-700'
        >
          Your AI Prompt
          <textarea
            value={post.prompt}
            onChange={(e) => setpost({ ...post, prompt: e.target.value })}
            className='form_textarea'
            placeholder='Write your prompt here...'
            required
          ></textarea>
        </label>
        <label
          htmlFor='prompt'
          className='font-satoshi font-semibold text-base text-gray-700'
        >
          Tag{" "}
          <span className='font-normal'>
            (#produc, #webdevelopment, #idea...)
          </span>
          <input
            value={post.tag}
            onChange={(e) => setpost({ ...post, tag: e.target.value })}
            className='form_input'
            placeholder='#tag'
            required
          ></input>
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={"/"} className='text-gray-500 text-sm underline'>
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
