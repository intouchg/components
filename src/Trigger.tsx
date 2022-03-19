import { createContext, useContext } from 'react'
import {
	useSubState,
	useCreateSubState,
	SubStateProvider,
} from '@intouchg/substate'

type TriggerFunctions = {
	getActiveIds: () => (string | number)[]
	setActiveIds: (ids: (string | number)[]) => void
	setActiveById: (id: string | number, active: boolean) => void
	toggleById: (id: string | number) => void
}

export const TriggerContext = createContext<TriggerFunctions>({} as any)

const createObject = (ids?: (string | number)[]) => {
	if (!ids) return {}
	const object: Record<string | number, boolean> = {}
	for (const id of ids) {
		object[id] = true
	}
	return object
}

const getActiveCount = (store: Record<string | number, boolean>) =>
	Object.values(store).filter((v) => v).length

export const Trigger = ({
	defaultActiveIds,
	allowMultiActive = true,
	allowNoneActive = true,
	children,
}: {
	defaultActiveIds?: (string | number)[]
	allowMultiActive?: boolean
	allowNoneActive?: boolean
	children: React.ReactNode
}) => {
	const initialValue = createObject(defaultActiveIds)
	const { store, setStore, subscribe } = useCreateSubState(initialValue)
	const setActiveById = (id: string | number, active: boolean) => {
		if (!active) {
			if (!store[id] || (!allowNoneActive && getActiveCount(store) === 1))
				return
			return setStore(id, false)
		}
		if (store[id]) return
		if (allowMultiActive) return setStore(id, true)

		for (const key in store) store[key] && setStore(key, false)
		setStore(id, true)
	}
	const setActiveIds = (ids: (string | number)[]) => {
		for (const id in store) setActiveById(id, ids.includes(id))
	}
	const toggleById = (id: string | number) => setActiveById(id, !store[id])
	const getActiveIds = () =>
		Object.entries(store)
			.filter(([, v]) => v)
			.map(([k]) => k)
	return (
		<SubStateProvider value={{ store, setStore, subscribe }}>
			<TriggerContext.Provider
				value={{
					getActiveIds,
					setActiveIds,
					setActiveById,
					toggleById,
				}}
			>
				{children}
			</TriggerContext.Provider>
		</SubStateProvider>
	)
}

export const useTrigger = (id?: string | number) => {
	const { state, store } = useSubState<boolean>(id)
	const { getActiveIds, setActiveIds, setActiveById, toggleById } =
		useContext(TriggerContext)

	return {
		id,
		active: state,
		setActive: (active: boolean) => {
			if (id !== undefined) setActiveById(id, active)
		},
		toggleActive: () => {
			if (id !== undefined) toggleById(id)
		},
		getActiveIds,
		setActiveIds,
		setActiveById,
		toggleById,
		getIds: () => Object.keys(store),
	}
}
