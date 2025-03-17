import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form className='flex gap-x-2 p-8 items-center'>
      <label className='text-center' htmlFor="email">Email:</label>
      <input  className='border-2 border-b-gray-300 rounded-md w-2xs' id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input className='border-2 border-b-gray-300 rounded-md w-2xs' id="password" name="password" type="password" required />
      <button className='rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2' formAction={login}>Log in</button>
      <button className='rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2' formAction={signup}>Sign up</button>
    </form>
  )
}