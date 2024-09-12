export namespace Event {


  export interface Context<T> {
    tree: Tree
    from: string
    node: string
    type: string
    self: Listener<T>
  }

  export type Listener<T> = (event: T, context: Context<T>) => void

  const ATTACH_LISTENER = "attach-listener"
  const DETACH_LISTENER = "detach-listener"
  const ATTACH_NODE     = "attach-node"
  const DETACH_NODE     = "detach-node"
  const DISPATCH        = "dispatch"
  
  type AttachListener = { action: typeof ATTACH_LISTENER, type: string, listener: Listener<any>, to   ?: string }
  type DetachListener = { action: typeof DETACH_LISTENER, type: string, listener: Listener<any>, from ?: string }
  type AttachNode     = { action: typeof ATTACH_NODE    , path: string }
  type DetachNode     = { action: typeof DETACH_NODE    , path: string }
  type Dispatch       = { action: typeof DISPATCH       , path: string, event: any }

  type Action = AttachListener | DetachListener | AttachNode | DetachNode | Dispatch


  export interface Tree {

  }

  export namespace Tree {

    export function attachListener<T>(tree: Tree, type: string, listener: Listener<T>, o ?: { to   ?: string, defer ?: boolean }) {
      const a: AttachListener = { action: ATTACH_LISTENER, type, listener, to: o?.to }
      if(o?.defer ?? true) queue(tree, a)
      else                 flush(tree, a)
    }

    export function detachListener<T>(tree: Tree, type: string, listener: Listener<T>, o ?: { from ?: string, defer ?: boolean }) {
      const a: DetachListener = { action: DETACH_LISTENER, type, listener, from: o?.from }
      if(o?.defer ?? true) queue(tree, a)
      else                 flush(tree, a)
    }

    export function attachNode(tree: Tree, path: string, o ?: { defer ?: boolean }) {
      const a: AttachNode = { action: ATTACH_NODE, path }
      if(o?.defer ?? true) queue(tree, a)
      else                 flush(tree, a)
    }

    export function detachNode(tree: Tree, path: string, o ?: { defer ?: boolean }) {
      const a: DetachNode = { action: DETACH_NODE, path }
      if(o?.defer ?? true) queue(tree, a)
      else                 flush(tree, a)
    }

    export function dispatch<T>(tree: Tree, event: T, o ?: { from ?: string, defer ?: boolean }) {
      const a: Dispatch = { action: DISPATCH, path: o?.from ?? "", event }
      if(o?.defer ?? true) queue(tree, a)
      else                 flush(tree, a)
    }

    export function poll(tree: Tree) {

    }

    function queue(tree: Tree, a: Action) {

    }

    function flush(tree: Tree, a: Action) {
      switch(a.action) {
        case ATTACH_LISTENER: return onAttachListener(tree, a)
        case DETACH_LISTENER: return onDetachListener(tree, a)
        case ATTACH_NODE    : return onAttachNode(tree, a)
        case DETACH_NODE    : return onDetachNode(tree, a)
      }
    }

    function onAttachListener(tree: Tree, a: AttachListener) {

    }

    function onDetachListener(tree: Tree, a: DetachListener) {

    }

    function onAttachNode(tree: Tree, a: AttachNode) {

    }

    function onDetachNode(tree: Tree, a: DetachNode) {

    }
  }

  export interface Node {

  }

  export namespace Node {

  }
}

export default Event