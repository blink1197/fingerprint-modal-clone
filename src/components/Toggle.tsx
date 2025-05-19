'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { Switch, Field, Label } from '@headlessui/react'

interface ToggleParams {
    isDeveloper: boolean;
    setIsDeveloper: Dispatch<SetStateAction<boolean>>;
    label?: string;
}


export const Toggle: React.FC<ToggleParams> = ({ isDeveloper, setIsDeveloper, label = "this is a label" }) => {
    return (
        <Field className="flex gap-2 items-center justify-center">
            <Label as="span" className="ml-3 text-xs">
                <span className="font-medium highlighted-text">{label}</span>{' '}
            </Label>
            <Switch
                checked={isDeveloper}
                onChange={setIsDeveloper}
                className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:ring-offset-2 focus:outline-hidden data-checked:bg-[#008080]"
            >
                <span className="sr-only">Use setting</span>
                <span className="pointer-events-none relative inline-block size-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-5">
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in group-data-checked:opacity-0 group-data-checked:duration-100 group-data-checked:ease-out"
                    >
                    </span>
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-checked:opacity-100 group-data-checked:duration-200 group-data-checked:ease-in"
                    >
                        <svg fill="currentColor" viewBox="0 0 12 12" className="size-3 text-[#008080]">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </span>
            </Switch>
        </Field>
    )
}
