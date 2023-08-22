import { BigNumber } from 'ethers'
import { IncreaseBidSizeEvent, StartAuctionEvent as SurplusStartAuctionEvent } from '../typechained/SurplusAuctionHouse'
import { StartAuctionEvent as DebtStartAuctionEvent } from '../typechained/DebtAuctionHouse'
import {
    BuyCollateralEvent,
    StartAuctionEvent as CollateralAuctionStartEvent,
} from '../typechained/CollateralAuctionHouse'

export interface ISurplusAuction {
    auctionId: string
    auctioneer: string
    auctionDeadline: string
    createdAt: string
    createdAtTransaction: string
    biddersList: Array<IAuctionBidder>
    isClaimed: boolean
    amount: string
    initialBid: string
}

export interface IDebtAuction {
    auctionId: string
    auctioneer: string
    auctionDeadline: string
    createdAt: string
    createdAtTransaction: string
    biddersList: Array<IAuctionBidder>
    isClaimed: boolean
    amount: string
    initialBid: string
}

export interface ICollateralAuction {
    auctionId: string
    auctioneer: string
    createdAt: string
    createdAtTransaction: string
    amountToSell: string
    initialBid: string
    amountToRaise: string
    isClaimed: boolean
    biddersList: Array<IAuctionBidder>
}

export interface IAuctionBidder {
    bidder: string
    bid: string
    createdAt: string
    createdAtTransaction: string
    buyAmount: string
}

export function surplusStartAuctionEventToAuction(
    startAuction: SurplusStartAuctionEvent,
    bids: { [key: string]: IAuctionBidder[] },
    restarts: { [key: string]: BigNumber },
    settled: { [key: string]: boolean }
): ISurplusAuction {
    const id = startAuction.args._id.toString()
    return {
        auctionId: id,
        auctioneer: startAuction.args._auctioneer,
        auctionDeadline: restarts[id] ? restarts[id].toString() : startAuction.args._auctionDeadline.toString(),
        amount: startAuction.args._amountToSell.toString(),
        initialBid: startAuction.args._amountToRaise.toString(),
        createdAt: startAuction.args._blockTimestamp.toString(),
        createdAtTransaction: startAuction.transactionHash.toString(),
        biddersList: bids[id] || [],
        isClaimed: settled[id] || false,
    }
}

export function debtStartAuctionEventToAuction(
    startAuction: DebtStartAuctionEvent,
    bids: { [key: string]: IAuctionBidder[] },
    restarts: { [key: string]: BigNumber },
    settled: { [key: string]: boolean }
): IDebtAuction {
    const id = startAuction.args._id.toString()
    return {
        auctionId: id,
        auctioneer: startAuction.args._auctioneer,
        auctionDeadline: restarts[id] ? restarts[id].toString() : startAuction.args._auctionDeadline.toString(),
        amount: startAuction.args._amountToSell.toString(),
        initialBid: startAuction.args._amountToRaise.toString(),
        createdAt: startAuction.args._blockTimestamp.toString(),
        createdAtTransaction: startAuction.transactionHash.toString(),
        biddersList: bids[id] || [],
        isClaimed: settled[id] || false,
    }
}

export function collateralStartAuctionEventToAuction(
    startAuction: CollateralAuctionStartEvent,
    bids: { [key: string]: IAuctionBidder[] },
    settled: { [key: string]: boolean }
): ICollateralAuction {
    return {
        auctionId: startAuction.args._id.toString(),
        auctioneer: startAuction.args._auctioneer,
        createdAt: startAuction.args._blockTimestamp.toString(),
        createdAtTransaction: startAuction.transactionHash.toString(),
        amountToSell: startAuction.args._amountToSell.toString(),
        initialBid: startAuction.args._amountToRaise.toString(),
        amountToRaise: startAuction.args._amountToRaise.toString(),
        isClaimed: settled[startAuction.args._id.toString()] || false,
        biddersList: bids[startAuction.args._id.toString()] || [],
    }
}

export function bidEventToBid(bid: IncreaseBidSizeEvent): IAuctionBidder {
    return {
        bidder: bid.args._bidder,
        bid: bid.args._raisedAmount.toString(),
        createdAt: bid.args._blockTimestamp.toString(),
        buyAmount: bid.args._soldAmount.toString(),
        createdAtTransaction: bid.transactionHash,
    }
}

export function collateralBidEventToBid(bid: BuyCollateralEvent): IAuctionBidder {
    return {
        bidder: bid.args._bidder,
        createdAt: bid.args._blockTimestamp.toString(),
        bid: bid.args._soldAmount.toString(),
        buyAmount: bid.args._raisedAmount.toString(),
        createdAtTransaction: bid.transactionHash,
    }
}
