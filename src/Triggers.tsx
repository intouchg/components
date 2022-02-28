import { createContext, useContext } from 'react'
import {
	useSubState,
	useCreateSubState,
	SubStateProvider,
} from '@intouchg/substate'

type TriggersContext = {
	getActiveIds: () => (string | number)[]
	setActiveIds: (ids: (string | number)[]) => void
	setActiveById: (id: string | number, active: boolean) => void
	toggleById: (id: string | number) => void
}

export const TriggersContext = createContext<TriggersContext>({} as any)

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

export const Triggers = ({
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
			<TriggersContext.Provider
				value={{
					getActiveIds,
					setActiveIds,
					setActiveById,
					toggleById,
				}}
			>
				{children}
			</TriggersContext.Provider>
		</SubStateProvider>
	)
}

type TriggerChildrenFnProps = Omit<TriggersContext, 'getActiveIds'> & {
	id?: string | number
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
	toggleActive: React.DispatchWithoutAction
	activeIds: (string | number)[]
	getIds: () => (string | number)[]
}

export const Trigger = ({
	id,
	children,
}: {
	id?: string | number
	children:
		| React.ReactNode
		| ((props: TriggerChildrenFnProps) => React.ReactNode)
}) => {
	const { state, setState, store } = useSubState(id, false)
	const { getActiveIds, setActiveIds, setActiveById, toggleById } =
		useContext(TriggersContext)

	if (typeof children === 'function')
		return children({
			id,
			active: state,
			setActive: setState,
			toggleActive: () => setState((s) => !s),
			activeIds: getActiveIds(),
			setActiveIds,
			setActiveById,
			toggleById,
			getIds: () => Object.keys(store),
		})

	return children
}
