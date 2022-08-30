/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


class ListNode {
     constructor(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}

function mergeTwoLists(l1, l2) {
    let head = new ListNode(-1)
    let prev = head;

    while (l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            prev.next = l1;
            // 将链表的节点向前走一位
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }

        prev = prev.next
    }

    prev.next = l1 === null ? l2 : l1
   

    return head.next

};