/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/lzCwgUI801A
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"

export function ThougtAdd() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Self-Notes</h1>
        <Link className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
          <MenuIcon className="h-6 w-6" />
        </Link>
      </header>
      <main className="flex-1 p-4 md:p-6 space-y-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="content">
                Save Content
              </label>
              <Textarea
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                id="content"
                placeholder="Type or paste your content here..."
                rows={4}
              />
            </div>
            <Button className="w-full" type="submit">
              Save Note
            </Button>
          </form>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Saved Self-Notes</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="text-gray-900 dark:text-gray-100 font-medium">Shopping List</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">May 23, 2023</div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                - Milk
                <br />- Eggs
                <br />- Bread
                <br />- Apples
              </p>
              <div className="flex justify-end mt-2 space-x-2">
                <Button size="sm" variant="outline">
                  Edit
                </Button>
                <Button size="sm" variant="outline">
                  Delete
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="text-gray-900 dark:text-gray-100 font-medium">Reminder: Call Mom</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">May 22, 2023</div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Don&apos;t forget to call Mom this weekend.</p>
              <div className="flex justify-end mt-2 space-x-2">
                <Button size="sm" variant="outline">
                  Edit
                </Button>
                <Button size="sm" variant="outline">
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

interface MenuIconProps {
  className?: string
}

function MenuIcon(props: MenuIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
